export default function handler(req, res) {

    let request = req.query.id;
    

    if(request == 10){
    return res.status(200).json('obteniendo un producto ' + req.query.id);
    }else{
    return res.status(200).json('error');
    }
}