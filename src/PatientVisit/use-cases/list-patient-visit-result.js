module.exports = function makeListPatientVisitResult({PatientVisitResultAccessDB,makeGetPatientVisitResult}){
    return async function listPatientVisitResult({query,params} = {}){
        if(!params){
            throw new Error('You must supple patient-visit id')
        }
        const PatientVisitResultEntity = makeGetPatientVisitResult({...query,...params})
        var Results =  await PatientVisitResultAccessDB.findResult({PatientVisitResultEntity})

        //console.log(Results)

        if(query.result_type === 'X-ray'){
            for(var result of Results){
              var ResultText = convertToPlain(result.TextualValue)
              result.TextualValue = ResultText
            }
        }

        if(query.result_type === 'Labs'){
            const result = LabResult(Results)
            return result
        }
    
        return Results
    }
    function convertToPlain(rtf) {
        rtf = rtf.replace(/\\par[d]?/g, "");
        rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
        return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
    }

    function LabResult(Results){
        var ResultNumbers = []
        var Result = []
        for(var result of Results){
            
            var {Identifier,
                RequestItemName,
                ResultNumber,
                Expr1,
                ...detail} = result

            if(!ResultNumbers.includes(result.ResultNumber)){
                var details = []
                ResultNumbers.push(result.ResultNumber)
                Result.push({Identifier,RequestItemName,ResultNumber,Expr1, details})
            }

            var index = ResultNumbers.indexOf(result.ResultNumber)

            Result[index].details.push(detail)

        }
        return Result
    }
    
}