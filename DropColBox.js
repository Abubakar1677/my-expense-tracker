export default function DropColBox({col,setCol}){
    return(
        <div>
            <div style={{transform:'translate(400px,-550px)'}}>
                    <p style={{fontStyle:'italic'}}>you can change color </p>
                <select style={{backgroundColor:'grey',width:'100px'}}>
                   <option onClick={() => setCol({ ...col, backgound: "blue" })} style={{backgroundColor:"blue",transition:'ease-in-out'}} >Blue</option>
                   <option onClick={() => setCol({ ...col, backgound: "green" })} style={{backgroundColor:"green",transition:'ease-in-out'}} >Green</option>
                   <option onClick={() => setCol({ ...col, backgound: "yellow" })} style={{backgroundColor:"yellow",transition:'ease-in-out',fontWeigh:'bolder'}} >Yellow</option>
                   <option onClick={() => setCol({ ...col, backgound: "skyblue" })} style={{backgroundColor:"skyblue",transition:'ease-in-out'}} >skyblue</option>
                   <option onClick={() => setCol({ ...col, backgound: "white" })} style={{backgroundColor:"white",transition:'ease-in-out'}} >White</option>
                   <option onClick={() => setCol({ ...col, backgound: "brown" })} style={{backgroundColor:"brown" , transition:'ease-in-out'}} >Brown</option>
                  
                </select>
            </div>
        </div>
    )
}