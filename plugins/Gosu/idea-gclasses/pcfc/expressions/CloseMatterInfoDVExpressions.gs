package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/litigation/CloseMatterInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CloseMatterInfoDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/litigation/CloseMatterInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CloseMatterInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=Note_Input) at CloseMatterInfoDV.pcf: line 18, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      CloseMatterInfo.note = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Resolution_Input) at CloseMatterInfoDV.pcf: line 24, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      CloseMatterInfo.resolution = (__VALUE_TO_SET as typekey.ResolutionType)
    }
    
    // 'value' attribute on TextAreaInput (id=Note_Input) at CloseMatterInfoDV.pcf: line 18, column 39
    function valueRoot_2 () : java.lang.Object {
      return CloseMatterInfo
    }
    
    // 'value' attribute on TextAreaInput (id=Note_Input) at CloseMatterInfoDV.pcf: line 18, column 39
    function value_0 () : java.lang.String {
      return CloseMatterInfo.note
    }
    
    // 'value' attribute on TypeKeyInput (id=Resolution_Input) at CloseMatterInfoDV.pcf: line 24, column 45
    function value_4 () : typekey.ResolutionType {
      return CloseMatterInfo.resolution
    }
    
    property get CloseMatterInfo () : CloseMatterInfo {
      return getRequireValue("CloseMatterInfo", 0) as CloseMatterInfo
    }
    
    property set CloseMatterInfo ($arg :  CloseMatterInfo) {
      setRequireValue("CloseMatterInfo", 0, $arg)
    }
    
    
  }
  
  
}