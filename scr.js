function calcularPocentajes(limiteCO,limiteCO2,limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2 )
{
    //100 / limite otroga constante para encontar porcentaje equivalente
    let porcentajes={};
    if(limiteCO==0)
    {
        porcentajes={"porcentajeCO": 0,
                    "porcentajeCO2":0,
                    "porcentajeHC" :0,
                    "porcentajeO2":0
                    }

    }
    else
    {
        porcentajes={"porcentajeCO": valorCO*(100/limiteCO),
                    "porcentajeCO2":valorCO2*(100/limiteCO2),
                    "porcentajeHC" :valorHC*(100/limiteHC),
                    "porcentajeO2":valorO2*(100/limiteO2)
                    }

    }    

    return porcentajes;
}

module.exports.calcularPocentajes= calcularPocentajes;

function registrarCO(valor)
{
    
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

function registrarCO2(valor)
{
    
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


function registrarHC(valor)
{
    
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

function registrarO2(valor)
{
    
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
