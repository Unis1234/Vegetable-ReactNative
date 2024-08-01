//image component
const Image=() =>{
  return(
     <Image
            source={{ uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZ3MzlhZWlpdWpiaXFuNGF4dGRxcTBjMHRvajhiNm1vZ3dwaHViOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nKERd2uhn8hhe/giphy.webp' }}
         
          />
  )
}
export default Image;
 
//textinput
const TextInput=() =>{
 return(
 
<TextInput
          style={styles.input}
          placeholder={isEmail ? "Email *" : "Phone Number *"}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType={isEmail ? "email-address" : "numeric"}
          autoCapitalize="none"
          textAlign="center"
        />
 )
}
export default TextInput;
 
 
 
const TouchableOpacity=()=>{
return(
   <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
)
}
export default TouchableOpacity;
 
//email validation
const isValidEmail = (email) => {
   return(
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
   )
  };
  export default isValidEmail;
 
//mobile number validation
  const isValidPhone = (phone) => {
    return(
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
    )
  };
  export default isValidPhone;
 
 // toggleEmailphone
  const toggleEmailPhone = () => {
    return(
    setIsEmail(!isEmail);
    setEmailOrPhone('');
    )
  };
export default toggleEmailPhone;
 
 
const Icon=()=>{
  return(
   <Icon
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#ccc"
            />
  )
}
export default Icon;
 
 
const style=()=>{
<View style={styles.container}>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  })
}
export default style;
 
 
const useEffect=() =>{
  return(
 useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        navigation.navigate('Home');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, navigation]);
  )
}
export default useEffect;
 
 
//otp validation
 const handleOtpVerification = () => {
    if (otp.trim().length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
      return;
    }
    setTimeout(() => {
      Alert.alert('Success', 'OTP verified successfully.');
      navigation.navigate('Login');
    }, 1000);
  };
export default handleOtpVerification;
 
 
// signup functionality
  const handleSignUp = () => {
    let valid = true;
    setErrors({});
 
    if (!firstName) {
      setErrors(prev => ({ ...prev, firstName: 'First Name is required.' }));
      valid = false;
    }
    if (!lastName) {
      setErrors(prev => ({ ...prev, lastName: 'Last Name is required.' }));
      valid = false;
    }
    if (!email || !isValidEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Valid Email is required.' }));
      valid = false;
    }
    if (!password || password.length < 8 || password.length > 12) {
      setErrors(prev => ({ ...prev, password: 'Password must be 8-12 characters long.' }));
      valid = false;
    }
    if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
      valid = false;
    }
 
    if (valid) {
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('OtpVerification', { email });
    }
  };
  export defaulthandleSignUp;