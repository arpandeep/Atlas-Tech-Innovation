// import React, { useState } from 'react';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { addDays } from 'date-fns';
// import { enUS } from 'date-fns/locale';
// import CheckoutForm from './CheckoutForm'; // Ensure CheckoutForm is updated

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const Booking = ({ room }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     if (startDate && endDate) {
//       const days = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
//       setTotalPrice(days * room.price);
//     }
//   }, [startDate, endDate, room.price]);

//   const handleClose = () => {
//     // Implement close logic
//   };

//   return (
//     <Dialog open onClose={handleClose}>
//       <DialogTitle>Book Room</DialogTitle>
//       <DialogContent>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             label="Start Date"
//             value={startDate}
//             onChange={(newValue) => setStartDate(newValue)}
//             renderInput={(params) => <TextField {...params} />}
//           />
//           <DatePicker
//             label="End Date"
//             value={endDate}
//             onChange={(newValue) => setEndDate(newValue)}
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </LocalizationProvider>
//         <Typography>Total Price: ${totalPrice}</Typography>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm totalPrice={totalPrice} />
//         </Elements>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Booking;
