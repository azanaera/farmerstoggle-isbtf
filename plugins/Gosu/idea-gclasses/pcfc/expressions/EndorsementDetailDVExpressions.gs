package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/EndorsementDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EndorsementDetailDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/EndorsementDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EndorsementDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at EndorsementDetailDV.pcf: line 33, column 42
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at EndorsementDetailDV.pcf: line 39, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at EndorsementDetailDV.pcf: line 45, column 45
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at EndorsementDetailDV.pcf: line 21, column 41
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.FormNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at EndorsementDetailDV.pcf: line 51, column 39
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.Vehicle_Ext = (__VALUE_TO_SET as entity.Vehicle)
    }
    
    // 'value' attribute on TextInput (id=edition_ext_Input) at EndorsementDetailDV.pcf: line 27, column 42
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Endorsement.Edition_Ext = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at EndorsementDetailDV.pcf: line 14, column 25
    function initialValue_0 () : Vehicle[] {
      return Endorsement.Policy.Vehicles*.Vehicle
    }
    
    // 'valueRange' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function valueRange_28 () : java.lang.Object {
      return AvailableVehicles_Ext
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at EndorsementDetailDV.pcf: line 21, column 41
    function valueRoot_3 () : java.lang.Object {
      return Endorsement
    }
    
    // 'value' attribute on TextInput (id=FormNumber_Input) at EndorsementDetailDV.pcf: line 21, column 41
    function value_1 () : java.lang.String {
      return Endorsement.FormNumber
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at EndorsementDetailDV.pcf: line 39, column 44
    function value_13 () : java.util.Date {
      return Endorsement.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at EndorsementDetailDV.pcf: line 45, column 45
    function value_17 () : java.util.Date {
      return Endorsement.ExpirationDate
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at EndorsementDetailDV.pcf: line 51, column 39
    function value_21 () : java.lang.String {
      return Endorsement.Comments
    }
    
    // 'value' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function value_25 () : entity.Vehicle {
      return Endorsement.Vehicle_Ext
    }
    
    // 'value' attribute on TextInput (id=edition_ext_Input) at EndorsementDetailDV.pcf: line 27, column 42
    function value_5 () : java.lang.String {
      return Endorsement.Edition_Ext
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at EndorsementDetailDV.pcf: line 33, column 42
    function value_9 () : java.lang.String {
      return Endorsement.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function verifyValueRangeIsAllowedType_29 ($$arg :  entity.Vehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function verifyValueRangeIsAllowedType_29 ($$arg :  gw.api.database.IQueryBeanResult<entity.Vehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=vehicle_ext_Input) at EndorsementDetailDV.pcf: line 59, column 36
    function verifyValueRange_30 () : void {
      var __valueRangeArg = AvailableVehicles_Ext
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    property get AvailableVehicles_Ext () : Vehicle[] {
      return getVariableValue("AvailableVehicles_Ext", 0) as Vehicle[]
    }
    
    property set AvailableVehicles_Ext ($arg :  Vehicle[]) {
      setVariableValue("AvailableVehicles_Ext", 0, $arg)
    }
    
    property get Endorsement () : Endorsement {
      return getRequireValue("Endorsement", 0) as Endorsement
    }
    
    property set Endorsement ($arg :  Endorsement) {
      setRequireValue("Endorsement", 0, $arg)
    }
    
    
  }
  
  
}