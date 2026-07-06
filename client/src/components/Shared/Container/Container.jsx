import "./container.css"
function Container({

    children,

    size = "lg",

    className = ""

}){

    const classes={

        lg:"container",

        md:"container-md",

        sm:"container-sm"

    };

    return(

        <div className={`${classes[size]} ${className}`}>

            {children}

        </div>

    );

}

export default Container;