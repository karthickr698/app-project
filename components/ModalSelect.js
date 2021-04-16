import React from "react";
import {  Modal, StyleSheet, Text, View,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../constants";

const ModalSelect = ({open,setOpen,data,setData,options,name}) => {
  return (
    <View style={styles.centeredView}>
      <TouchableWithoutFeedback 
        onPress={() => setOpen()}
      >
        <Modal
          style={styles.modal}
          animationType="fade"
          transparent={true}
          visible={open}
          closeOnClick={true}
          onRequestClose={() => {
            setOpen()
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {
                options && options.map((ele,i)=>
                  <TouchableOpacity key={i} style={{width:'100%',borderBottomWidth:1,borderColor:COLORS.lightGray}} onPress={() => { setOpen()}}>
                      <Text 
                        style={{
                          height:40,
                          paddingTop:8
                        }} 
                        onPress={() => { 
                          setOpen()
                          setData({...data,[name]:ele.value})
                          console.log(ele.value)
                        }} activeOpacity={1} >
                          {ele.label}
                      </Text>
                  </TouchableOpacity>
                )
              }
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  modal:{
    backgroundColor: 'white',
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    width:'80%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  }
});

export default ModalSelect;