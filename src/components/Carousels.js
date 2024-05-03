import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import anisha from './images/avatar-anisha.png';
import ali from './images/avatar-ali.png';
import richard from './images/avatar-richard.png';
import shanai from './images/avatar-shanai.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    avatar: anisha,
    name: 'Anisha Li',
    comment: 'Age has supercharged our team\'s workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    avatar: ali,
    name: 'Ali Bravo',
    comment: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    avatar: richard,
    name: 'Richard Watts',
    comment: 'Manage allows us to provide structure and keeps us organised and focused. I can\'t stop recommending them to everyone I talk to!',
  },
  {
    avatar: shanai,
    name: 'Shanai Lee',
    comment: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
];

function Carousels() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleStepChange = (step) => setActiveStep(step);

  return (
    <Box sx={{ width: '95%', flexGrow: 1 }} >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="comment"
       style={{width:'100%'}}
      >
        {images.map((step, index) => (
          <div key={index} >
            {Math.abs(activeStep - index) <= 2 ? (
              <box>
                <img
                  
                  src={step.avatar}
                  alt={step.name}
                  className="pfp"
                  style={{ marginTop:'10px'}}
                />
                <Typography className='body'  style={{color:'hsl(233, 12%, 13%)', fontSize:'11px'}}>{step.name}</Typography>
                <Typography  className='body'  style={{color:'hsl(227, 12%, 61%)', fontSize:'11px',paddingBottom:'10px'}}>{step.comment}</Typography>
              </box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        style={{display:'flex', justifyContent:'center'}}
        activeStep={activeStep}
        className='steep'
        
      />
    </Box>
  );
}

export default Carousels;
