import React, { useState } from 'react';
import axios from 'axios';

import { Dialog, DialogTitle, DialogContent, Typography, MenuItem, FormControl, Select, TextField, IconButton, Grid, Button, InputAdornment, Paper, InputBase } from '@material-ui/core';
// import icons
import UploadIcon from '@mui/icons-material/PublishOutlined';

const styles = (theme) => ({
    ...theme.spreadThis,
    dialog: {
        borderRadius: 20,
        overflowX:'hidden'
    },
    dialogTitle: {
        textAlign: 'center',
        '& .MuiDialogTitle-root': {
            fontSize: '2rem !important'
        }
    },
    formControl: {
        /*width: '-webkit-fill-available',
        marginBottom: 25,*/
        '& .MuiSelect-select': {
            padding: '10px !important'
        }
    },
    select: {
        height: 40
    },
    textField: {
        height: 40,
        marginBottom: 25
    },
    iconButton: {
        boxSizing: "border-box",
        //display: 'block',
        width: '100%',
        border: '1px dashed gray',
        borderRadius: 0,
        marginBottom: 25,
        height: 40
    },
    button: {
        backgroundColor: '#AC22AE',
        color: 'white'
    },
    input: {
        //marginLeft: theme.spacing(1),
        //flex: 1,
        width: '222px',
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    paper: {
        backgroundColor: 'transparent',
        alignContent: 'center'
        //borderRadius: 12,
        //marginBottom: 15
    },
    /*title: {
        height: 40,
        width: 500
    },
    centerAdornment: {
        marginLeft: '30%'
    }*/
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function AddNewAnimalDialog(props) {
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [sex, setSex] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value);
    };

    const handleAnimalTypeChange = (event) => {
        setAnimalType(event.target.value);
    };

    const handleSexChange = (event) => {
        setSex(event.target.value);
    };

    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAdoptionStatusChange = (event) => {
        setAdoptionStatus(event.target.value);
    };

    const handleFileChange = (event) => {
    }

    //Clear the state once a new project is created
    const handleCloseAndClearDialog = (handleDialogClose) => {
        setId(-1);
        setName('');
        setBirthDate('');
        setAnimalType('');
        setSex('');
        setBreed('');
        setDescription('');
        setAdoptionStatus('');

        handleDialogClose();
    }

    const animalTypes = ['Cat', 'Dog'];
    const adoptionStatuses = ['Foster', 'Adopt'];

    //console.log(name + " " + sex + " " + birthDate);

    const addAnimal = async () => {
        axios.post('http://localhost:5000/addanimal', {
            name: name,
            status: adoptionStatus,
            sex: sex,
            description: description,
            url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRNEPsBJohGM%2Fmaxresdefault.jpg&f=1&nofb=1',
            breed: breed,
            type: animalType
        }).then((response) => {
            if (response.err) {
                // error reponse 
                console.log(response.err);
            } else {
                // animal returned
                console.log(name + " the " + animalType + " is added to DB");
            }
        });
    };

    return (
        <Dialog
            open={props.openDialog}
            onClose={props.handleDialogClose}
            fullWidth
            maxWidth='md'
            style={{
                borderRadius: 20
            }}
            //className={classes.dialog}
            id='add-new-animal-dialog'
        >
            <DialogTitle
                /*className={classes.dialogTitle}*/
                style={{
                    textAlign: 'center',
                }}
            >
                <Paper component="form" style={{backgroundColor: 'transparent', alignContent: 'center'}}/*className={classes.paper}*/>
                    <InputBase
                        id="name"
                        name="name"
                        type="name"
                        //className={classes.input}
                        placeholder="Animal Name"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{
                            fontFamily:'Montserrat',
                            fontSize:'20px',
                            width: '222px',
                            alignContent: 'center',
                            textAlign: 'center',
                            backgroundColor: 'transparent'
                        }}
                        value={name}
                        // helperText={errors.name}
                        // error={errors.name ? true : false}
                        onChange={handleNameChange}
                    />
                </Paper>
            </DialogTitle>
            
            <DialogContent /*className={classes.dialogContent}*/ >

                <Grid container direction="row" spacing={4} alignContent={'center'} justify="space-between">
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            ANIMAL TYPE
                        </Typography>
                        <FormControl variant="outlined" /*className={classes.formControl} style={{ marginBottom:10 }}*/ fullWidth>
                            <TextField
                                //labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                select
                                value={animalType}
                                onChange={handleAnimalTypeChange}
                                //className={classes.select}
                                fullWidth
                                //style={{ width:500 }}
                            >
                                {animalTypes.map((animalType) => (
                                    <MenuItem value={animalType} key={animalType}>{animalType}</MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            ADOPTION STATUS
                        </Typography>
                        <FormControl variant="outlined" /*className={classes.formControl} style={{ marginBottom:10 }}*/ fullWidth>
                            <TextField
                                //labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                select
                                value={adoptionStatus}
                                onChange={handleAdoptionStatusChange}
                                //className={classes.select}
                                fullWidth
                                //style={{ width:500 }}
                            >
                                {adoptionStatuses.map((adoptionStatus) => (
                                    <MenuItem value={adoptionStatus} key={adoptionStatus}>{adoptionStatus}</MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            SEX
                        </Typography>
                        <form noValidate>
                            <TextField
                                id="sex"
                                name="sex"
                                type="sex"
                                //placeholder="Issue To Focus On"
                                //className={classes.textField}
                                style={{
                                    height: 40,
                                    marginBottom: 25,
                                    marginTop: 10
                                }}
                                value={sex}
                                // helperText={errors.sex}
                                // error={errors.sex ? true : false}
                                onChange={handleSexChange}
                                fullWidth
                                color='secondary'
                                variant='outlined'
                                size='small'
                                InputLabelProps={{
                                    //className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            BREED
                        </Typography>
                        <form noValidate>
                            <TextField
                                id="breed"
                                name="breed"
                                type="breed"
                                //placeholder="Issue To Focus On"
                                //className={classes.textField}
                                style={{
                                    height: 40,
                                    marginBottom: 25,
                                    marginTop: 10
                                }}
                                value={breed}
                                // helperText={errors.sex}
                                // error={errors.sex ? true : false}
                                onChange={handleBreedChange}
                                fullWidth
                                color='secondary'
                                variant='outlined'
                                size='small'
                                InputLabelProps={{
                                    //className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </form>
                    </Grid>
                </Grid>

                <Typography variant='body1'>
                    DATE OF BIRTH
                </Typography>
                <form noValidate>
                    <TextField
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        //placeholder="YYYY-MM-DD"
                        //className={classes.textField}
                        style={{
                            height: 40,
                            marginBottom: 25,
                            marginTop: 10
                        }}
                        value={birthDate}
                        // helperText={errors.birth_date}
                        // error={errors.birth_date ? true : false}
                        onChange={handleBirthDateChange}
                        fullWidth
                        color='secondary'
                        variant='outlined'
                        size='small'
                        InputLabelProps={{
                            //className: classes.floatingLabelFocusStyle,
                        }}
                    />
                </form>

                <Typography variant='body1'>
                    DESCRIPTION
                </Typography>
                <form noValidate>
                    <TextField
                        id="description"
                        name="description"
                        type="description"
                        //placeholder="Issue To Focus On"
                        //className={classes.textField}
                        style={{
                            height: 40,
                            marginBottom: 25,
                            marginTop: 10
                        }}
                        value={description}
                        // helperText={errors.sex}
                        // error={errors.sex ? true : false}
                        onChange={handleDescriptionChange}
                        fullWidth
                        color='secondary'
                        variant='outlined'
                        size='small'
                        InputLabelProps={{
                            //className: classes.floatingLabelFocusStyle,
                        }}
                    />
                </form>

                <Typography variant='body1'>
                    UPLOAD PICTURE
                </Typography>
                <label htmlFor='upload-project-file'>
                    <input
                        type='file'
                        name='upload-project-file'
                        id='upload-project-file'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <IconButton
                        component='span'
                        /*className={classes.iconButton}*/
                        style={{
                            boxSizing: "border-box",
                            //display: 'block',
                            width: '100%',
                            border: '1px dashed gray',
                            borderRadius: 0,
                            marginBottom: 25,
                            height: 40
                        }}
                    >
                        <UploadIcon />
                    </IconButton>
                </label>

                {/* <Grid container direction="row" spacing={4} alignContent={'center'} justify="space-between">
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            PROJECT LEAD
                        </Typography>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.project_lead}
                                onChange={this.handleProjectLeadChange}
                                className={classes.select}
                                fullWidth
                            >
                                {this.state.people.map((person) => (
                                    <MenuItem value={person.name} key={person.name}>{person.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            INVITE PEOPLE
                        </Typography>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <Select
                                multiple
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.people_invited}
                                onChange={this.handleMultiSelect}
                                MenuProps={MenuProps}
                                className={classes.select}
                                fullWidth
                            >
                                {this.state.people.map((person) => (
                                    <MenuItem value={person.name} key={person.name}>{person.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>
                            WHEN DO YOU NEED IT BY?
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                id="deadline"
                                name="deadline"
                                type="date"
                                //placeholder="YYYY-MM-DD"
                                className={classes.textField}
                                value={this.state.deadline}
                                helperText={errors.deadline}
                                error={errors.deadline ? true : false}
                                onChange={this.handleChange}
                                fullWidth
                                color='secondary'
                                variant='outlined'
                                size='small'
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </form>
                    </Grid>
                </Grid> */}
                <div style={{
                    textAlign: 'center',
                }}>
                    <Button
                        variant='contained'
                        //className={classes.button}
                        style={{
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            //color: '#818181'
                        }}
                        onClick={() => {
                            addAnimal();
                            setTimeout(() => handleCloseAndClearDialog(props.handleDialogClose), 10);
                        }}
                    >
                        ADD ANIMAL
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default AddNewAnimalDialog;
