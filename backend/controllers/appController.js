import otpGenerator from 'otp-generator'

const generateOTP = async(req, res) => {
    let OTP = await otpGenerator.generate(6, {lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
}

export {generateOTP}