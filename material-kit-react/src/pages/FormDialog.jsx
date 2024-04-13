import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormDialog() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      amountCurrency: '',
      interestRate: 10,
      duration: '',
      name: ''
    });
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSliderChange = (event, newValue) => {
      setFormData(prev => ({
        ...prev,
        interestRate: newValue
      }));
    };
  
    const handleSubmit = () => {
      console.log('Submitting Form Data:', formData);
      handleClose();
    };
  
    return (
      <div>
        <Button variant="contained" onClick={handleOpen}>
          Request for New Loan
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Request for New Loan</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <InputLabel id="amount-currency-label">Amount Currency</InputLabel>
              <Select
                labelId="amount-currency-label"
                id="amountCurrency"
                name="amountCurrency"
                value={formData.amountCurrency}
                label="Amount Currency"
                onChange={handleChange}
              >
                <MenuItem value="Hive">Hive</MenuItem>
                <MenuItem value="Flow">Flow</MenuItem>
                <MenuItem value="Polygon">Polygon</MenuItem>
                <MenuItem value="ETH">Ethereum (ETH)</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="duration"
              label="Duration (months)"
              type="number"
              fullWidth
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="interest-rate-label">Interest Rate (%)</InputLabel>
              <Slider
                value={formData.interestRate}
                onChange={handleSliderChange}
                aria-labelledby="interest-rate-label"
                valueLabelDisplay="auto"
                step={0.5}
                marks
                min={0}
                max={20}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default FormDialog;
  