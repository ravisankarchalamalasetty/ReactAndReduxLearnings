import React  from 'react';
export const Header =(props)=> {
    return (
      <div>
          <h2 className="text-info text-center">
             Welcome to {props.title}
        </h2>          
      </div>
    )
}

// Specifies the default values for props:
Header.defaultProps = {
  title: 'Welcome to React Project'
};
