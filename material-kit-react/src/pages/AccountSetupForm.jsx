import React from 'react';
import { TextField, Button, Container, Typography, Grid, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
function AccountSetupForm() {
    // Local state to handle form fields
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        aadhaar: '',
        pan: '',
        employmentStatus: '',
        employmentHistory: '',
        creditScore: '',
        ethereumAddress: ''
    });

    // Employment status options
    const employmentOptions = [
        'Employed',
        'Self-Employed',
        'Unemployed',
        'Student',
        'Retired'
    ];

    // Handle input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you might want to send the data to your backend or a blockchain network
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" gutterBottom>
                User Account Setup
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Aadhaar Number"
                            name="aadhaar"
                            value={formData.aadhaar}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="PAN"
                            name="pan"
                            value={formData.pan}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="employment-status-label">Employment Status</InputLabel>
                            <Select
                                labelId="employment-status-label"
                                label="Employment Status"
                                name="employmentStatus"
                                value={formData.employmentStatus}
                                onChange={handleChange}
                            >
                                {employmentOptions.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Employment History"
                            name="employmentHistory"
                            value={formData.employmentHistory}
                            onChange={handleChange}
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Credit Score"
                            name="creditScore"
                            type="number"
                            value={formData.creditScore}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Ethereum Address"
                            name="ethereumAddress"
                            value={formData.ethereumAddress}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default AccountSetupForm;
