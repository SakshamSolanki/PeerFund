import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Menu, MenuItem } from '@mui/material';

function FinanceCards() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Account Balance Card */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Account Balance
          </Typography>
          <Typography variant="body2">
            Your current account balance is displayed here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
        </CardActions>
      </Card>

      {/* Repayment Balance Card */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Repayment Balance
          </Typography>
          <Typography variant="body2">
            Your total repayment amount is displayed here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
        </CardActions>
      </Card>

      {/* Add Money Card */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Add Money
          </Typography>
          <Typography variant="body2">
            Select the currency or token to add to your account.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Choose Currency
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Hive Tokens</MenuItem>
            <MenuItem onClick={handleClose}>Polygon</MenuItem>
            <MenuItem onClick={handleClose}>Flow Tokens</MenuItem>
            <MenuItem onClick={handleClose}>Ethereum</MenuItem>
            <MenuItem onClick={handleClose}>Fiat Currencies</MenuItem>
          </Menu>
        </CardActions>
      </Card>
    </div>
  );
}

export default FinanceCards;
