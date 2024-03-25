import records from './records.json'
import Barchat from './BarChart.jsx'
import {useLocation} from 'react-router-dom'

const BarchartData=()=>{

    const location = useLocation();
    const data = location.state[0]
    
    const GPAConvertor = (grade) => {
        switch (grade) {
          case 'O':
           return 10;
          case 'A+':
           return 9;
          case 'A':
           return 8;
          case 'B+':
           return 7;
          case 'B':
           return 6;
          case 'C':
           return 5;
          case 'RA':
           return 0;
          default:
           return 0;
        }
      };
    // const x=(value)=>{
    //     dataarr.xvalue.push(value)
    // }
    return(
        
        <div>
            {[data].map((records) => (
                <div key={records.roll_no}>
                    
                    {records.semesters.map((n1) => {
                         const dataarr={
                            xvalue:[],
                            yvalue:[]     
                         };
                         return (       
                        <div key={n1.semester}> 
                            {n1.Sub_details.map((n2) => (
                        <div >
                           {dataarr.yvalue.push(GPAConvertor(n2.grade))}
                           {dataarr.xvalue.push(n2.course_code)}
                           
                        </div>   
                    )
                    )
                    },
                   
                   <Barchat data={dataarr}key={n1.semester} className="chart"/>
                  
                        </div>)
                        {console.log(dataarr.xvalue)}
                        {console.log(dataarr.yvalue)}
                             
                })}
                     
                </div>   
            )
            
            )
            }
             
        </div>
        
    )
}
export default BarchartData