import { Box, Button, Card, Divider, Modal, TextField, Grid } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCart from './AddressCart'
import { AddLocation } from '@mui/icons-material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
//import * as Yup from "yup"

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddresses: "",
  state: "",
  pincode: "",
  city: ""
}

// const validationSchema = Yup.object.shape({
//   streetAddresses: Yup.string().required("Street address is required"),
//   state: Yup.string().required(" State is required"),
//   pincode: Yup.string().required("pincode is required"),
//   city: Yup.string().required("City is required")

// })


const items = [1, 1]
const Cart = () => {
  const createOrderUsingSelectedAddress = () => {

  }
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = (value) => {
    console.log(" form value", value)
  }
  return (
    <div>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {items.map((items) => <CartItem />)} <Divider />
          <div className='billDetails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill DetailS</p>
            <div space-y-3>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>$599</p>

              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Delivery Fee</p>
                <p>$17</p>

              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Gst and Restaurant Charges</p>
                <p>$0.5</p>
              </div>
              <Divider />
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Total pay</p>
              <p>$650</p>
            </div>
          </div>

        </section>

        <Divider orientation='vertical' flexItem />
        
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Choose Delivery Address
            </h1>
            <div className='flex gap-5 flex-wrap justify-center'>
              {[1, 1, 1, 1, 1].map((item) =>
              (<AddressCart handleSelectAddress={createOrderUsingSelectedAddress}
                item={item} showButton={true} />))}

              <Card className="flex gap-5 w-64 p-5 items-start">
                <AddLocation />
                <div className='space-y-3 text-gray-500'>
                  <h1 className="font-semibold text-lg text-white"> Add new Address</h1>


                  <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>
                    Add
                  </Button>

                </div>
              </Card>

            </div>
          </div>
        </section>

      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal0title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form>

              <Grid container spacing={2}>


                <Grid item xs={12}>
                  <Field as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className='text-red-600'>{msg}</span>}
                  //   </ErrorMessage>
                  // }
                  />

                </Grid>

                <Grid item xs={12}>
                  <Field as={TextField}
                    name="state"
                    label="state"
                    fullWidth variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className='text-red-600'>{msg}</span>}
                  //   </ErrorMessage>
                  // }
                  />

                </Grid>

                <Grid item xs={12}>
                  <Field as={TextField}
                    name="city"
                    label="city"
                    fullWidth variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className='text-red-600'>{msg}</span>}
                  //   </ErrorMessage>
                  // }
                  />

                </Grid>

                <Grid item xs={12}>
                  <Field as={TextField}
                    name="pincode"
                    label="pincode"
                    fullWidth variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className='text-red-600'>{msg}</span>}
                  //   </ErrorMessage>
                  // }
                  />

                </Grid>
                <Grid item xs={12}>

                  <Button fullWidth variant="constained" type="submit" style={{ backgroundColor: '#AA336A', color: '#FFFFFF' }} >Deliver Here</Button>
                </Grid>


              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div >
  )
}

export default Cart