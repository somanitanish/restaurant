import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"


const Work = () => {
    const WorkInfoData=[
    {
        image:PickMeals,
        title:"PickMeals",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
        image:ChooseMeals,
        title:"Choose How Often",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
    },
    {
        image:DeliveryMeals,
        title:"Fast Deliveries",
        text: "Lorem ipsum dolor sit amet consectetur.",
    },
]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>
                Work
            </p>
            <h1 className='primary-heading'>
                How it works
            </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                WorkInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-box-img-container'>
                            <img src={data.image} alt=''></img>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default Work