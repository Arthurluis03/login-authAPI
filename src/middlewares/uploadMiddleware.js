import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename: (req, file, cb)=>{
        const novoArquivo = Date.now() + "-" + file.originalname
        cb(null, novoArquivo)
    }
})

const upload = multer({
    storage: storage
})
export default upload;