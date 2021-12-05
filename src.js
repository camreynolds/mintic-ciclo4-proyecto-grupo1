//URL_API_LIMITES ="https://misiontic2022upb.vercel.app/api/emission-measurement/limits";
//URL_API_RANGES_PARAMETERS ="https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters";


const calcularPocentajes = async (valorCO,valorCO2,valorHC,valorO2)=>
{  
 
    //solucion con async/await
    //la respuesta que me da es una promesa por eso se debe luego convertir en un json
    let respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/limits");
    let datos= await respuesta.json();
    let limiteCO=datos["Parametro CO en rango estandar"];
    let limiteCO2=datos["Parametro CO2 en rango estandar"];
    let limiteHC=datos["Parametro HC en rango estandar"];
    let limiteO2=datos["Parametro O2 en rango estandar"]; 


    let porcentajes={};
    let porcentajeCO=0;
    let porcentajeCO2=0;
    let porcentajeHC=0;
    let porcentajeO2=0;

    if(limiteCO==0)
    {
        porcentajeCO=valorCO*(100/limiteCO);
    }
    if(limiteCO2==0)
    {
        porcentajeCO2=valorCO2*(100/limiteCO2);
    }
    if(limiteHC==0)
    {
        porcentajeHC=valorHC*(100/limiteHC);
    }
    if(limiteO2==0)
    {
        porcentajeO2=valorO2*(100/limiteO2);
    }
   
        porcentajes={"porcentajeCO":porcentajeCO,
                    "porcentajeCO2":porcentajeCO2,
                    "porcentajeHC" :porcentajeHC,
                    "porcentajeO2":porcentajeO2
                    }
       
    console.log(valorCO,valorCO2,valorHC,valorO2);
    console.log(porcentajes);
    return porcentajes;

}

module.exports.calcularPocentajes= calcularPocentajes;



const registrarCO = async (valor)=>{

    let respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let ranges_parameters= await respuesta.json();
    let rangoCO=ranges_parameters[0]

    console.log(valor)
    
    if (valor<0 )
    {
        return "fuera_de_rango"        
    }
    else if(valor>10)
    {
	    return "Parametro CO fuera de rango"
    }
    else
    {
	    return "Parametro CO en rango estandar"
    }
   
    

}

module.exports.registrarCO=registrarCO;



const registrarCO2 = async (valor)=>{

    let respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let ranges_parameters= await respuesta.json();
    let rangoCO2=ranges_parameters[1]

    console.log(valor)
    
    if (valor<0 )
    {
        return "fuera_de_rango"        
    }
    else if(valor>20)
    {
	return "Parametro CO2 fuera de rango"
    }
    else
    {
	return "Parametro CO2 en rango estandar"
    }

}

module.exports.registrarCO2=registrarCO2;


const registrarHC = async (valor)=>{

    let respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let ranges_parameters= await respuesta.json();
    let rangoHC=ranges_parameters[2]

    console.log(valor)
    
    if (valor<0 )
    {
        return "fuera_de_rango"        
    }
    else if(valor>10000)
    {
	return "Parametro HC fuera de rango"
    }
    else
    {
	return "Parametro HC en rango estandar"
    }

}

module.exports.registrarHC=registrarHC;

const registrarO2 = async (valor)=>{

    let respuesta = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");
    let ranges_parameters= await respuesta.json();
    let rangoO2=ranges_parameters[3]

    console.log(valor)
    
    if (valor<0 )
    {
        return "fuera_de_rango"        
    }
    else if(valor>22)
    {
	return "Parametro O2 fuera de rango"
    }
    else
    {
	return "Parametro O2 en rango estandar"
    }

}

module.exports.registrarO2=registrarO2;


