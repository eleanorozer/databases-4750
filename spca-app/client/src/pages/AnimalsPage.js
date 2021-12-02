import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import * as api from "../DatabaseAPI"
import { makeStyles } from '@mui/material/styles';
import { Grid, Stack, Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import AnimalCard from "../components/AnimalCard";


const options = ['Sort by: Name', 'Sort by: DOB', 'Sort by: Breed', 'Filter by: Cats', 'Filter by: Dogs'];

export default function AnimalsPage() {
    useEffect(() => {
        getAnimals();
    },[]); //will only run once

    //Sort Button
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedSort, setSelectedSort] = useState("Name");

    const handleClick = () => {
        if(selectedIndex != 3 && selectedIndex != 4){
            sortAnimals();
        } else {
            sortAnimalsType();
        }
        
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);

        if(index === 0)         setSelectedSort("Name");
        else if(index === 1)    setSelectedSort("BirthDate");
        else if(index === 2)    setSelectedSort("Breed");
        else if(index === 3)    setSelectedSort("Cat");
        else if(index === 4)    setSelectedSort("Dog");
        else                    setSelectedSort("id");
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    //Animals
    const [animals, setAnimals] = useState([]);
    
    // grab all animals from the database
    const getAnimals = async () => {
        try {
            const response = await axios.get('http://localhost:5000/animals');
            setAnimals(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    // sort all animals from the database
    const sortAnimals = async () => {
        console.log(selectedSort);
        axios.post('http://localhost:5000/sortAnimals', {
            sortId: selectedSort,
        }).then((response) => {
            if (response.err) {
                // error reponse 
                console.log(response.err);
            } else {
                // animal returned
                setAnimals(response.data);
            }
        });
    };

    // sort all animals from the database
    const sortAnimalsType = async () => {
        console.log(selectedSort);
        axios.post('http://localhost:5000/sortAnimalsType', {
            sortId: selectedSort,
        }).then((response) => {
            if (response.err) {
                // error reponse 
                console.log(response.err);
            } else {
                // animal returned
                setAnimals(response.data);
            }
        });
    };

    return (
        <div className="animalPage" style={{ marginLeft:50, marginTop:30}}>
            <Stack direction="row" spacing={2} justifyContent="center" style={{ marginBottom:50 }}>
                <Button variant="contained">Filter</Button>

                {/* Sort Button */}
                <React.Fragment>
                    <ButtonGroup variant="contained" ref={anchorRef} aria-label="sort button">
                        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                        size="small"
                        aria-controls={open ? 'sort-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="menu"
                        onClick={handleToggle}
                        >
                        <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="sort-button-menu">
                                {options.map((option, index) => (
                                    <MenuItem
                                    key={option}
                                    //disabled={index === 2}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                    {option}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                </React.Fragment>
            </Stack>

            <Grid container spacing={1}>
                {
                // map function is basically a for-each
                animals.map((animal) => (
                    // key={animal.ID} is required to avoid error
                    <Link key={animal.ID} to={`/animal:id${animal.ID}`}>
                        <AnimalCard animal={animal} /> 
                    </Link>           
                ))
                }
            </Grid>
        </div>
    );
};
