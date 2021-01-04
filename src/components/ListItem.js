import React, {Component} from 'react';
import {Text,TouchableWithoutFeedback,View,Alert} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection'
import * as actions from '../actions/index';


class ListItem extends Component {

    renderDescription() {

      const { library, expanded } = this.props.library.item;
      
      console.log("Props"+this.props.library.item.title)
      console.log( "selectedLibraryId"+ this.props.selectedLibraryId)
      console.log(this.props.library.item.description)
      if(this.props.library.item.id === this.props.selectedLibraryId){
          // console.log(this.props.library.item.description)
              return (
                <CardSection>
                  <Text>
                    {this.props.library.item.description}
                  </Text>
                </CardSection>
              );

      }

    // if (expanded) {
    //   return (
    //     <CardSection>
    //       <Text>
    //         {this.props.library.item.description}
    //       </Text>
    //     </CardSection>
    //   );
    //}

        // console.log("Hello......")
        // console.log("selectedLibraryId id");
        // console.log( this.props)
        // console.log("selectedLibraryId");
        // console.log(" start props id");
        // console.log( this.props.library.item.id, this.props.selectedLibraryId +"description"+ this.props.library.item.description)

        // console.log(" end props");
        // const { library, expanded } = this.props;
        //  if (expanded) {
        //   return (
        //     <CardSection>
        //       <Text>
        //         SAlma
        //       </Text>
        //     </CardSection>
        //   )
        //  }
        // if(this.props.library.item.id === this.props.selectedLibraryId){

        //   console.log("KKKKKK id");

        //       <Text>
        //         {this.props.library.item.description}
        //       </Text>
        // }
      }

    render(){
        //console.log("Gugly")
        //console.log(this.props)
        const { titleStyle } = styles;
         const { id, title,description } = this.props.library.item;
         //console.log(this.props.library.item.id)
         return (
            // <TouchableWithoutFeedback onPress={() => Alert.alert(id.toString())}
            // >
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id.toString())}
          >
              <View>
                <CardSection>
                  <Text>
                    {title}
                  </Text>
                </CardSection>
                {this.renderDescription()}
              </View>
            </TouchableWithoutFeedback>
          );    
    }


}

const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
        borderButtomWidth:1,
        borderColor:'#000',

    },
    descriptionStyle: {
      paddingLeft: 10,
      paddingRight: 10
    }
  };

  //const mapStateToProps = (state, ownProps) => {
    // console.log("state");
    // console.log(state.selectedLibraryId);
    // console.log("state");
    // console.log("ownProps");

    // console.log(ownProps.library.item.id)
    // console.log("ownProps");

    //const expanded = state.selectedLibraryId === ownProps.library.id;
    //return { expanded };
 // };

const mapStateToProps = (state) => {

    // console.log("state");
    // console.log(state);
    // console.log("state");
    // console.log("ownProps");
    // console.log(ownProps.library.item.id)
    // console.log("ownProps");

    return { selectedLibraryId:state.selectedLibraryId1};
};

  
export default connect(mapStateToProps, actions)(ListItem);