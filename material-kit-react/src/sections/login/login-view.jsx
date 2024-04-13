import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import dhive from '@hivechain/dhive';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/dashboard');
  };

  // state = {username : "", error : "", loginType : ""};
  //   client = new dhive.Client('https://anyx.io');

  //   login_hivesigner = () =>
  //   {
  //       window.open(process.env.NODE_ENV ===  "production" ? 'https://back.downvotecontrol.com/auth' : "http://localhost:4002/auth",'',' scrollbars=yes,menubar=no,width=447,height=614, resizable=yes,toolbar=no,location=no,status=no')
  //   };

  //   display_login_keychain = () =>
  //   {

  //       if(window.hive_keychain) {

  //           let keychain = window.hive_keychain

  //           keychain.requestHandshake(() => {
  //               setState({loginType :  "keychain"});
  //           });

  //       } else {
  //           setState({error : "You do not have hive keychain installed"});
  //       }
  //   };

  
  // send_login_token = async () =>
  //   {

  //       let keychain = window.hive_keychain;


  //       let memo = (await backend.post('/auth/keychain/fetch_memo', {username: this.state.username})).data;

  //       if (memo.status === "ok")
  //       {
  //           keychain.requestVerifyKey(this.state.username, memo.message, "Posting", (response) => {
  //               if (response.success === true)
  //               {
  //                   this.props.login_keychain(this.state.username, response.result);
  //               }
  //           });
  //       } else
  //       {
  //           this.setState({error : "There was an error with the backend server, please try again"});
  //       }

  //   };

  //   login_keychain = async (event) =>
  //   {
  //       event.preventDefault();


  //       if(window.hive_keychain) {
  //           let keychain = window.hive_keychain;

  //           let data = await client.database.getAccounts([state.username]);
  //           if (data.length === 1) {

  //               let auth = data[0].posting.account_auths.filter(el => el[0] === "downvote-tool");

  //               if (auth.length === 0) {

  //                   keychain.requestAddAccountAuthority(state.username, "downvote-tool", "posting", 1, (response) => {
  //                       if (response.success === true)
  //                           send_login_token();
  //                       else
  //                           setState({error : "Keychain error"});
  //                   });
  //               } else {
  //                   this.send_login_token();
  //               }
  //           } else
  //           {
  //               this.setState({error : "Hive user not found"});
  //           }
  //       } else {
  //           this.setState({error : "You do not have hive keychain installed"});
  //       }
  //   };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      {/* <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src="./hive_symbol.png" alt="hive icon" style={{width: "150px"}}/>
                        </div>

                        <br />
                        <span style={{color : "red"}}>{this.state.error}</span>

                        <form onSubmit={this.login_keychain}>
                        <input type={"text"} placeholder={"Username"} value={state.username} onChange={(event) => setState({username : event.target.value})} />

                        <button type={"button"} className="btn btn-primary " onClick={login_keychain}  style={{
                            backgroundColor: "white",
                            color: "#999999",
                            width: "235px",
                            marginTop: "20px",
                            border: "1px solid #999999",
                            borderRadius: "0"
                        }}>Log in with keychain
                        </button>
                        </form>


                    </div>
                </div> */}

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to PeerFund</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              {/* <Iconify 
              icon="" color="#1877F2" /> */}
              Hive.io


              
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
