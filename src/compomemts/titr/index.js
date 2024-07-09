import cx from "classnames"
const Titr=({children,color="white"})=>{
    return (
        <h1 className= {cx(`text-${color}`)}>
        {children}
        <hr></hr>
      </h1>
      
    );
  }
  
  export default Titr;
  