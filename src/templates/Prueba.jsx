import { useEffect } from "react"


export default function Prueba(props){

  useEffect(() => {

    
    alert('Entre')


    const URIsms = "https://api.ckpnd.com:5000/v1/sms/send"

    fetch(URIsms,{
      method:'POST',
      body:{
        "campaign_name": "SMS de verificacion mundo refrigeracion",
        "message": "Codigo #: ",
        "mobile_numbers": [
            "+573217258986"
        ]
    },
    mode: 'cors',
      headers:{
        "Authorization": "Bearer {ef7458f3.e429413ea8b908653634e073}",
        "Content-Type": "application/json"
    }
    }).then((res)=>console.log(res))



  }, []);

  return(
    <div>
PRUEBA SMS CLICKPANDA
    </div>
  )

}