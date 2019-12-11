const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME = () => <div/>;

/**
 * HINT
 * If you get stuck, you can go into '/tests/utils.js' and set 'global.hints = true'.
 * That way the error message will be more specific.
 * However, give it a try before you do this,
 * as in most cases this will give you the answer flat out.
 */






/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 5.1 Exercise description:
 *
 * --- 1 ---
 *
 * <MyFirstFancyJsxComponent
 *   isValid={false}
 *   isSaving={false}
 *   isActive={false}
 * />
 *
 * should render
 *
 * <div></div>
 *
 * --- 2 ---
 *
 * <MyFirstFancyJsxComponent
 *   isValid={true}
 *   isSaving={false}
 *   isActive={false}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its valid</div>
 * </div>
 *
 * --- 3 ---
 *
 * <MyFirstFancyJsxComponent
 *   isValid={true}
 *   isSaving={true}
 *   isActive={false}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its valid</div>
 *   <div>its saving</div>
 * </div>
 *
 * --- 4 ---
 *
 * <MyFirstFancyJsxComponent
 *   isValid={false}
 *   isSaving={true}
 *   isActive={true}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its saving</div>
 *   <div>its active</div>
 * </div>
 *
 * --- 5 ---
 *
 * <MyFirstFancyJsxComponent
 *   isValid={true}
 *   isSaving={true}
 *   isActive={true}
 * />
 *
 * should render
 *
 * <div>
 * 	 <div>its valid</div>
 *   <div>its saving</div>
 *   <div>its active</div>
 * </div>
 *
 * ----------------------------------
 * HINT: The short circuit (multiple)
 * ----------------------------------
 */
class MyFirstFancyJsxComponent extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    return <div>
      {this.props.isValid && (<div>its valid</div>)}
      {this.props.isSaving && (<div>its saving</div>)}
      {this.props.isActive && (<div>its active</div>)}
    </div>
  }
}



/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 5.2 Exercise description:
 *
 * --- 1 ---
 *
 * <MySecondFancyJsxComponent
 *   isActive={true}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its active</div>
 * </div>
 *
 * --- 2 ---
 *
 * <MySecondFancyJsxComponent
 *   isActive={false}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its not active</div>
 * </div>
 *
 * -----------------
 * HINT: The ternary
 * -----------------
 */
class MySecondFancyJsxComponent extends React.Component {
  render(){
    return(
      <div>
        {this.props.isActive ? (
          <div>its active</div>
        ):(
          <div>its not active</div>
        )}
      </div>
    )
  }
}



/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 5.3 Exercise description:
 *
 * --- 1 ---
 *
 * <MyThirdFancyJsxComponent
 *   isReady={true}
 *   isSaving={false}
 * />
 *
 * should render
 *
 * <div>
 *   <div>its ready</div>
 * </div>
 *
 * --- 2 ---
 *
 * <MyThirdFancyJsxComponent
 *   isReady={false}
 *   isSaving={true}
 * />
 *
 * should render
 *
 * <div>
 *   <div>not ready, but saving</div>
 * </div>
 *
 * --- 3 ---
 *
 * <MyThirdFancyJsxComponent
 *   isReady={false}
 *   isSaving={false}
 * />
 *
 * should render
 *
 * <div>
 *   <div>not ready and not saving either</div>
 * </div>
 *
 *
 * ------------------------
 * HINT: The nested ternary
 * ------------------------
 */

class MyThirdFancyJsxComponent extends React.Component 
{
  render(){
    return(
      <div>
        {this.props.isReady ? (
          this.props.isSaving? (
              ''
            ):(
              <div>its ready</div>
            )
        ):(this.props.isSaving? (
          <div>not ready, but saving</div>
          ):(
            <div>not ready and not saving either</div>
          )
        )}
      </div>
    )
  }
}










/**
 * Exports
 */
module.exports = {
  MyFirstFancyJsxComponent,
  MySecondFancyJsxComponent,
  MyThirdFancyJsxComponent,
};
