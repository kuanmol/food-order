import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
    { category: "Nuts & seeds", ingredients: ["Cashews"] },
    { category: "Protein", ingredients: ["Protein", "Bacon strips"] }
];

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header">
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] object-cover'
                            src='https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' alt='' />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className=' font-semibold text-xl'>Burger</p>
                            <p>$37.79</p>
                            <p className='text-gray-400'>Nice food</p>

                        </div>

                    </div>

                </div>


            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>

                        {demo.map((item) => (
                            <div>
                                <p>{item.category}</p>

                                <FormGroup>
                                    {item.ingredients.map((item) => <FormControlLabel
                                        control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>}
                                        label={item}
                                    />)}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className='pt-55'>
                        <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;
