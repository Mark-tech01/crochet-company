import ".Section.css";

function Section({

    children,

    size="default",

    className=""

}){

    const classes={

        default:"section",

        sm:"section-sm",

        lg:"section-lg"

    };

    return(

        <section className={`${classes[size]} ${className}`}>

            {children}

        </section>

    );

}

export default Section;