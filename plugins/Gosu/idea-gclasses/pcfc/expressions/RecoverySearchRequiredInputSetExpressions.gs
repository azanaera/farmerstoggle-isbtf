package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/search/recoveries/RecoverySearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RecoverySearchRequiredInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/search/recoveries/RecoverySearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RecoverySearchRequiredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_4 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_6 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 28, column 54
    function def_onEnter_17 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 28, column 54
    function def_onEnter_19 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 31, column 54
    function def_onEnter_22 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 31, column 54
    function def_onEnter_24 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 28, column 54
    function def_refreshVariables_18 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 28, column 54
    function def_refreshVariables_20 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 31, column 54
    function def_refreshVariables_23 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'def' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 31, column 54
    function def_refreshVariables_25 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(RecoverySearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYER } )
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at RecoverySearchRequiredInputSet.pcf: line 18, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at RecoverySearchRequiredInputSet.pcf: line 37, column 58
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.NameCriteria.TaxId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.CreatedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'mode' attribute on InputSetRef at RecoverySearchRequiredInputSet.pcf: line 28, column 54
    function mode_21 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function valueRange_11 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at RecoverySearchRequiredInputSet.pcf: line 18, column 51
    function valueRoot_2 () : java.lang.Object {
      return RecoverySearchCriteria
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at RecoverySearchRequiredInputSet.pcf: line 37, column 58
    function valueRoot_29 () : java.lang.Object {
      return RecoverySearchCriteria.NameCriteria
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at RecoverySearchRequiredInputSet.pcf: line 18, column 51
    function value_0 () : java.lang.String {
      return RecoverySearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at RecoverySearchRequiredInputSet.pcf: line 37, column 58
    function value_27 () : java.lang.String {
      return RecoverySearchCriteria.NameCriteria.TaxId
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function value_8 () : entity.User {
      return RecoverySearchCriteria.CreatedByUser
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_13 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    property get RecoverySearchCriteria () : RecoverySearchCriteria {
      return getRequireValue("RecoverySearchCriteria", 0) as RecoverySearchCriteria
    }
    
    property set RecoverySearchCriteria ($arg :  RecoverySearchCriteria) {
      setRequireValue("RecoverySearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}