// import {
//   AppBar,
//   Avatar,
//   Box,
//   Container,
//   Dialog,
//   IconButton,
//   Rating,
//   Slide,
//   Stack,
//   Toolbar,
//   Tooltip,
//   Typography,
// } from '@mui/material';
// import { forwardRef, useEffect, useState } from 'react';
// import { useValue } from '../../context/ContextProvider';
// import { Close, StarBorder } from '@mui/icons-material';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectCoverflow, Lazy, Zoom } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/lazy';
// import 'swiper/css/zoom';
// import './swiper.css';

// const Transition = forwardRef((props, ref) => {
//   return <Slide direction="up" {...props} ref={ref} />;
// });

// const Room = () => {
//   const {
//     state: { room },
//     dispatch,
//   } = useValue();

//   const [place, setPlace] = useState(null);

//   useEffect(() => {
//     if (room) {
//       const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.lng},${room.lat}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => setPlace(data.features[0]));
//     }
//   }, [room]);

//   const handleClose = () => {
//     dispatch({ type: 'UPDATE_ROOM', payload: null });
//   };
//   return (
//     <Dialog
//       fullScreen
//       open={Boolean(room)}
//       onClose={handleClose}
//       TransitionComponent={Transition}
//     >
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
//             {room?.title}
//           </Typography>
//           <IconButton color="inherit" onClick={handleClose}>
//             <Close />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ pt: 5 }}>
//         <Swiper
//           modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
//           centeredSlides
//           slidesPerView={2}
//           grabCursor
//           navigation
//           autoplay
//           lazy
//           zoom
//           effect="coverflow"
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//         >
//           {room?.images?.map((url) => (
//             <SwiperSlide key={url}>
//               <div className="swiper-zoom-container">
//                 <img src={url} alt="room" />
//               </div>
//             </SwiperSlide>
//           ))}
//           <Tooltip
//             title={room?.uName || ''}
//             sx={{
//               position: 'absolute',
//               bottom: '8px',
//               left: '8px',
//               zIndex: 2,
//             }}
//           >
//             <Avatar src={room?.uPhoto} />
//           </Tooltip>
//         </Swiper>
//         <Stack sx={{ p: 3 }} spacing={2}>
//           <Stack
//             direction="row"
//             sx={{
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//             }}
//           >
//             <Box>
//               <Typography variant="h6" component="span">
//                 {'Price Per Night: '}
//               </Typography>
//               <Typography component="span">
//                 {room?.price === 0 ? 'Free Stay' : '$' + room?.price}
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               <Typography variant="h6" component="span">
//                 {'Ratings: '}
//               </Typography>
//               <Rating
//                 name="room-ratings"
//                 defaultValue={3.5}
//                 precision={0.5}
//                 emptyIcon={<StarBorder />}
//               />
//             </Box>
//           </Stack>
//           <Stack
//             direction="row"
//             sx={{
//               justifyContent: 'space-between',
//               flexWrap: 'wrap',
//             }}
//           >
//             <Box>
//               <Typography variant="h6" component="span">
//                 {'Place Name: '}
//               </Typography>
//               <Typography component="span">{place?.text}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="h6" component="span">
//                 {'Address: '}
//               </Typography>
//               <Typography component="span">{place?.place_name}</Typography>
//             </Box>
//           </Stack>
//           <Stack>
//             <Typography variant="h6" component="span">
//               {'Details: '}
//             </Typography>
//             <Typography component="span">{room?.description}</Typography>
//           </Stack>
//         </Stack>
//       </Container>
//     </Dialog>
//   );
// };

// export default Room;


// import {
//   AppBar,
//   Avatar,
//   Box,
//   Button,
//   Container,
//   Dialog,
//   DialogActions,
//   IconButton,
//   Rating,
//   Slide,
//   Stack,
//   Toolbar,
//   Tooltip,
//   Typography,
//   Paper,
// } from '@mui/material';
// import { forwardRef, useEffect, useState } from 'react';
// import { useValue } from '../../context/ContextProvider';
// import { Close, StarBorder } from '@mui/icons-material';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectCoverflow, Lazy, Zoom } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/lazy';
// import 'swiper/css/zoom';
// import './swiper.css';

// const Transition = forwardRef((props, ref) => {
//   return <Slide direction="up" {...props} ref={ref} />;
// });

// const Room = () => {
//   const {
//     state: { room },
//     dispatch,
//   } = useValue();

//   const [place, setPlace] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (room) {
//       // Fetch place details
//       const placeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.lng},${room.lat}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
//       fetch(placeUrl)
//         .then((response) => response.json())
//         .then((data) => setPlace(data.features[0]));

//       // Fetch user details
//       const userUrl = `${process.env.REACT_APP_SERVER_URL}/user/contact/${room.uid}`;
//       fetch(userUrl)
//         .then((response) => response.json())
//         .then((data) => setUser(data));
//     }
//   }, [room]);

//   const handleClose = () => {
//     dispatch({ type: 'UPDATE_ROOM', payload: null });
//   };

//   const handleContactClick = () => {
//     if (user && room) {
//       const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}&su=${encodeURIComponent(
//         room.title
//       )}`;
//       window.location.href = emailUrl;
//     }
//   };

//   return (
//     <Dialog
//       fullScreen
//       open={Boolean(room)}
//       onClose={handleClose}
//       TransitionComponent={Transition}
//     >
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
//             {room?.title}
//           </Typography>
//           <IconButton color="inherit" onClick={handleClose}>
//             <Close />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ pt: 5 }}>
//         <Swiper
//           modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
//           centeredSlides
//           slidesPerView={2}
//           grabCursor
//           navigation
//           autoplay
//           lazy
//           zoom
//           effect="coverflow"
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//         >
//           {room?.images?.map((url) => (
//             <SwiperSlide key={url}>
//               <div className="swiper-zoom-container">
//                 <img src={url} alt="room" />
//               </div>
//             </SwiperSlide>
//           ))}
//           <Tooltip
//             title={room?.uName || ''}
//             sx={{
//               position: 'absolute',
//               bottom: '8px',
//               left: '8px',
//               zIndex: 2,
//             }}
//           >
//             <Avatar src={room?.uPhoto} />
//           </Tooltip>
//         </Swiper>
//         <Stack sx={{ p: 3 }} spacing={2}>
//           {user && (
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 mb: 2,
//                 px: 2,
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 component="span"
//                 sx={{ fontWeight: 'bold' }}
//               >
//                 Listed by: {user.name}
//               </Typography>
//               <Typography
//                 variant="h6"
//                 component="span"
//                 sx={{ fontWeight: 'bold' }}
//               >
//                 Email: {user.email}
//               </Typography>
//             </Box>
//           )}
//           <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
//             <Stack
//               direction="row"
//               sx={{
//                 justifyContent: 'space-between',
//                 flexWrap: 'wrap',
//               }}
//             >
//               <Box>
//                 <Typography variant="h6" component="span">
//                   Price per night:
//                 </Typography>
//                 <Typography component="span" sx={{ fontWeight: 'bold' }}>
//                   {room?.price === 0 ? 'Free stay' : '$' + room?.price}
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Typography variant="h6" component="span">
//                   Ratings:
//                 </Typography>
//                 <Rating
//                   name="room-ratings"
//                   defaultValue={3.5}
//                   precision={0.5}
//                   emptyIcon={<StarBorder />}
//                   readOnly
//                 />
//               </Box>
//             </Stack>
//           </Paper>
//           <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
//             <Stack
//               direction="row"
//               sx={{
//                 justifyContent: 'space-between',
//                 flexWrap: 'wrap',
//               }}
//             >
//               <Box>
//                 <Typography variant="h6" component="span">
//                   Place name:
//                 </Typography>
//                 <Typography component="span" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//                   {place?.text}
//                 </Typography>
//               </Box>
//               <Box>
//                 <Typography variant="h6" component="span">
//                   Address:
//                 </Typography>
//                 <Typography component="span" sx={{ fontWeight: 'bold', fontStyle: 'italic', textTransform: 'uppercase' }}>
//                   {place?.place_name}
//                 </Typography>
//               </Box>
//             </Stack>
//           </Paper>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6" component="span">
//               Details:
//             </Typography>
//             <Typography component="span" sx={{ fontStyle: 'italic' }}>
//               {room?.description}
//             </Typography>
//           </Paper>
//         </Stack>
//       </Container>
//       <DialogActions sx={{ justifyContent: 'center' }}>
//         {user && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleContactClick}
//           >
//             Contact Now
//           </Button>
//         )}
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Room;

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  IconButton,
  Rating,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  Paper,
} from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import { useValue } from '../../context/ContextProvider';
import { Close, StarBorder } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, Lazy, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/lazy';
import 'swiper/css/zoom';
import './swiper.css';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" {...props} ref={ref} />;
});

const Room = () => {
  const {
    state: { room },
    dispatch,
  } = useValue();

  const [place, setPlace] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (room) {
      // Fetch place details
      const placeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.lng},${room.lat}.json?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
      fetch(placeUrl)
        .then((response) => response.json())
        .then((data) => setPlace(data.features[0]));

      // Fetch user details
      const userUrl = `${process.env.REACT_APP_SERVER_URL}/user/contact/${room.uid}`;
      fetch(userUrl)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, [room]);

  const handleClose = () => {
    dispatch({ type: 'UPDATE_ROOM', payload: null });
  };

  const handleContactClick = () => {
    if (user && room) {
      const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}&su=${encodeURIComponent(
        room.title
      )}`;
      window.location.href = emailUrl;
    }
  };

  return (
    <Dialog
      fullScreen
      open={Boolean(room)}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/travel-3eb3d.appspot.com/o/profile%2F669ed44a0361788050d31223%2Fd5e34723-584c-4ad8-901e-7c64e086e224.jpg?alt=media&token=f7f65842-7237-4f05-943d-23f35e84e096)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" component="h3" sx={{ ml: 2, flex: 1 }}>
              {room?.title}
            </Typography>
            <IconButton color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container sx={{ pt: 5, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow, Lazy, Zoom]}
            centeredSlides
            slidesPerView={2}
            grabCursor
            navigation
            autoplay
            lazy
            zoom
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {room?.images?.map((url) => (
              <SwiperSlide key={url}>
                <div className="swiper-zoom-container">
                  <img src={url} alt="room" />
                </div>
              </SwiperSlide>
            ))}
            <Tooltip
              title={room?.uName || ''}
              sx={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                zIndex: 2,
              }}
            >
              <Avatar src={room?.uPhoto} />
            </Tooltip>
          </Swiper>
          <Stack sx={{ p: 3 }} spacing={2}>
            {user && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                  px: 2,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 'bold' }}
                >
                  Listed by: {user.name}
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 'bold' }}
                >
                  Email: {user.email}
                </Typography>
              </Box>
            )}
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <Box>
                  <Typography variant="h6" component="span">
                    Price per night:
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: 'bold' }}>
                    {room?.price === 0 ? 'Free stay' : '$' + room?.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" component="span">
                    Ratings:
                  </Typography>
                  <Rating
                    name="room-ratings"
                    defaultValue={3.5}
                    precision={0.5}
                    emptyIcon={<StarBorder />}
                    readOnly
                  />
                </Box>
              </Stack>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <Box>
                  <Typography variant="h6" component="span">
                    Place name:
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {place?.text}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component="span">
                    Address:
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: 'bold', fontStyle: 'italic', textTransform: 'uppercase' }}>
                    {place?.place_name}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                Details:
              </Typography>
              <Typography component="span" sx={{ fontStyle: 'italic' }}>
                {room?.description}
              </Typography>
            </Paper>
          </Stack>
        </Container>
        <DialogActions sx={{ justifyContent: 'center' }}>
          {user && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleContactClick}
            >
              Contact Now
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default Room;
