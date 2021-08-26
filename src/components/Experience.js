import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <div className="header__wrapper">
          <h1 className="header__header">
            Experience
          </h1>
        </div>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita eligendi
              obcaecati ab. Reiciendis repudiandae, alias, nesciunt eligendi consequatur cumque voluptatibus a
              eveniet consectetur ratione inventore eos sunt pariatur. Quisquam magnam minus non sed eum impedit molestias
              quod id soluta!</p>
          </div>
        </div>


        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita eligendi
              obcaecati ab. Reiciendis repudiandae, alias, nesciunt eligendi consequatur cumque voluptatibus a
              eveniet consectetur ratione inventore eos sunt pariatur. Quisquam magnam minus non sed eum impedit molestias
              quod id soluta!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
