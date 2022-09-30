export default function MyImge(props){
    let fname = './'+props.fname
    let size = props.size+"px"
    return(
        <img width={size} boorder="1"src={fname} />
    )
}