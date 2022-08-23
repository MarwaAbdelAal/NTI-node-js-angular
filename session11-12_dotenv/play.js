const bcryptjs = require("bcryptjs")

const build = async()=>{
    const pass = "123456"
    const passEncoded = await bcryptjs.hash(pass, 12)
    console.log(passEncoded);
    const isValid = await bcryptjs.compare(pass, passEncoded)
    console.log(isValid);
}
build()