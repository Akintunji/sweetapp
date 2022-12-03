

import React, { useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
//import 'react-native-gesture-handler';


function Home1({navigation}){

  useEffect(() =>{
    setTimeout(()=>{navigation.navigate('Login');}, 6000);
   });




  

// <- add the count variable here
return(


<SafeAreaView  style={{justifyContent: 'center', alignItems: 'center',color: 'white', backgroundColor:'#5C6B9C', height:'100%',}}>



<View style={{marginTop:390,color: 'white', backgroundColor:'#5C6B9C' ,flexDirection:"row"}}>


<Image  style={styles.image} source={require("./assets/icon2.png")}/>
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white',fontSize:50,  }}>Sweetloan</Text> 
</View>
<View style={{marginTop:490,color: 'white', backgroundColor:'#5C6B9C' }}/>

 



</SafeAreaView>
); 


}






function Reg_component({navigation}){
  const [email,setemail]=useState('');
  const [password, setpass]=useState(''); 
  const [username, setusername]=useState('');
  const [confirm_password,  setcpass]=useState('');
  const [phonenumber, setphonenumber]=useState('');
  const [referer_code, setreferercode]=useState('');
  
  //const reg = async () => {
  
  //if (email.length==0 || password.length==0 || confirm_password.length==0  || username.length==0  || Phonenumber.length ==0  ) {alert('Missing Field');}
function reg (value){
  if(password!==confirm_password) { alert('Passwords Donot Match');navigation.navigate('home');}
  
  fetch('https://www.haykaytelecoms.com.ng/api/Api_h', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    email : email,
      password: password,
      name:username,
     phonenumber:phonenumber,
     referer_code:referer_code,
  
    })
  }) .then((response) => response.json())
      .then((response) => {
     
   if (response.status=="Success"){navigation.navigate('Home')}
   else{alert('Problems Encountered Registering You,Maybe email taken');}
  
  });
  
  }
    
  
       
  
  
    
  
  return (
  <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',color: 'white', backgroundColor:'#5C6B9C', height:'100%',}}>
   <View style={{marginTop:50 }}>
  
  
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor: '#5C6B9C',paddingVertical:40,}}>
     <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' }}>
     Usernames
    </Text>
  
   <TextInput title= "username"
      
  style={{borderWidth:4,borderColor:'white',marginTop:15 }}
  onChangeText={(val)=>setusername(val)} placeholderTextColor="white"
   />
  
  
   <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white',marginTop:15 }}>
     Email{email}
    </Text>
   <TextInput title= "Email"
      
  style={{ color: 'puple',borderWidth:4,borderColor:'white',marginTop:15 }}
  onChangeText={(val)=>setemail(val)} placeholderTextColor="white"
   />
  
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white',marginTop:15  }}>
     Phonenumber
    </Text>
   <TextInput  
         
  style={{ borderWidth:4,borderColor:'white' }}
  onChangeText={(val)=>  setphonenumber(val)} placeholderTextColor="white"/>
  
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white',marginTop:15 }}>
      Password
    </Text>
  <TextInput  
  
  onChangeText={(val)=>setpass(val)}
  
  placeholderTextColor="white"
   onSubmitEditing={Keyboard.dismiss}   
   style={{borderWidth:4,borderColor:'white' }}  />
  
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white',marginTop:15  }}>
    Confirm  Password
    </Text>
    
  <TextInput  
  
  onChangeText={(val)=>setcpass(val)}
  
  placeholderTextColor="white"
   onSubmitEditing={Keyboard.dismiss}   
   style={{ color: 'puple',borderWidth:4,borderColor:'white' }}  />
  
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' ,marginTop:15 }}>
    Referer Code (Optional)
    </Text>
  <TextInput  
  onChangeText={(val)=> setreferercode(val)}
  placeholderTextColor="white"
    
   style={{borderWidth:4,borderColor:'white' }}   />
  
  
  <Button title="REGISTER" onPress={reg}  style={{ width:300,}}/>
  
  
  
    <View style={{ marginTop: 300 }} />
    <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' }}>
     Already Registered
    </Text>
  </View>
  </SafeAreaView>
    );
  
  
  
  }
  
  

function Logins({navigation}){
  const [signed_in, setsigned_in]=useState('false'); 
  const [balance,setbalance]=useState('');
  const [token,settoken]=useState('');
  const [name, setname]=useState('');
  const [email, setemail]=useState('');
  const [password, setpass]=useState('');
   function userlogin (value){
  
    
     fetch('https://www.haykaytelecoms.com.ng/api/apilogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      email : email,
        password: password,
    
    })
    }) .then((response) => response.json())
        .then((response) => {
       setname(response.name);
     if (response.status=="Success"){
      navigation.navigate('Home')
      alert('Success');}
      else{
        alert('Invalid Details');}
    });
    
    }
  
  
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',color: 'white', backgroundColor:'#5C6B9C', height:'100%',}}>  <View style={{marginTop:200 }}>
  
  
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , paddingVertical:40,}}>
        <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
     Email
    </Text>
   <TextInput title= "Email"
    placeholder="Enter Email"
  style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'white' }}
  onChangeText={(val)=>setemail(val)} placeholderTextColor="white"
   underlineColorAndroid="transparent"
  autoCorrect='true'/>
  <Text>{name} {token}</Text>
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
      Password
    </Text>
  
   <TextInput title= "Email"
    placeholder="Enter password"
  style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'white' }}
  onChangeText={(val)=>setpass(val)} placeholderTextColor="white"
  autoCorrect='true'
   underlineColorAndroid="transparent"
  secureTextEntry='true'/>
  <Text>{password}</Text>
  
  
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'blue' }}>
    Remember Me</Text>
    <View style={{ backgroundColor:'white',height:"20%",}}/>  
  <Button title="LOGIN"  onPress={userlogin} />
  
  
  </View>
  
  
  </SafeAreaView>
     
  
    );
  
  }
  





  function Dashboard({ navigation }) {


    const [balance, setbalance]= useState('');
    const [token, settoken]= useState('');
    const [name, setname]= useState('');
  
  
  
  
  
  return (
    
  
  <SafeAreaView style={styles.Safeareaview}>
  
  <View style={styles.welcome}>
  
  <Text>Welcome </Text> 
 
  <TouchableOpacity style={styles.tochnav}><Text>Update Profile</Text></TouchableOpacity>
  
  
      </View>
  
  
   <View style={styles.pcontainer}>
   <TouchableOpacity onPress={navigation.navigate('Apply')} style={styles.tochnav}><Text>Apply for Loan</Text></TouchableOpacity>
  <TouchableOpacity><Text>PayLoan</Text></TouchableOpacity>
     </View>
  
  
       
  
    </SafeAreaView>
  
    );
  }

const styles = StyleSheet.create({
Touchable:{ backgroundColor: '#5C6B9C',
flex: 1,
justifyContent: 'center',

},

header: {
height: '100',
     flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
fontSize:20,
fontWeight:'bold',
    height:80, 
color: 'white',
PaddingTop:38,
  },
  hoome:{
    backgroundColor:'#00080',
    color: 'green',
  },
title:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 welcome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },  
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },

button:{
    flex: 10.02,
    backgroundColor: '#fff',
    alignItems: 'center',
  },


footer: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
 Color: 'white',
 color: "#20232a",
 top: 270,
height: 658,
  },
 image: {
    width: 66,
    height: 58,
  },
Buttons:{ backgroundColor: 'pink',
justifyContent: 'center',
marginTop:50 ,
  

},});




const Tab = createBottomTabNavigator();
//const Tab = createStackNavigator();
//const isSignedIn =true;
export default function App() {
 return (  <NavigationContainer>
<Tab.Navigator  screenOptions={{
          title: 'Sweetloan',
          backgroundColor:'gold',
      }} >

<Tab.Screen name="Home" component={Home1}  options={{
          title: 'Sweetloan',
          headerStyle: {
            backgroundColor: 'gold',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          tabBarButton: () => null,
        }}/>
        <Tab.Screen name="Login" component={Logins}options={{
          title: 'LOGIN',
          cardShadowEnabled:'true',
          animationEnabled:'true',
          animationTypeForReplace:'pop',
      headerStyle: {
         
            backgroundColor: 'gold',
          },headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
       
       }} />
  <Tab.Screen name="Register" component={Reg_component} options={{
         title:'Register',
          headerStyle: {
            backgroundColor: 'gold',
          },headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            animationTypeForReplace:'push',

          },
          animationEnabled:'true',}} /> 

<Tab.Screen name="Dashboard" component={Dashboard} options={{
        
          headerStyle: {
            backgroundColor: 'gold',
          },headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            animationTypeForReplace:'push',

          },
          animationEnabled:'true',
           
          tabBarButton: () => null,}} /> 

 

      </Tab.Navigator>

      
    </NavigationContainer>


 );

























}

