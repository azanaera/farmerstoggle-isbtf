package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotFixedPropertyIncident800DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotFixedPropertyIncident800DVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotFixedPropertyIncident800DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotFixedPropertyIncident800DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 37, column 27
    function def_onEnter_9 (def :  pcf.AddressSnapshot800InputSet) : void {
      def.onEnter(FixedPropertyIncident.Property.Address, null)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 37, column 27
    function def_refreshVariables_10 (def :  pcf.AddressSnapshot800InputSet) : void {
      def.refreshVariables(FixedPropertyIncident.Property.Address, null)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 54, column 46
    function sortValue_11 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 59, column 46
    function sortValue_12 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.OwnerType
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return FixedPropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 47, column 41
    function value_19 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Lienholders
    }
    
    // 'value' attribute on TextInput (id=EstimatedReceived_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 71, column 38
    function value_20 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 77, column 84
    function value_24 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 83, column 84
    function value_29 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return FixedPropertyIncident.Description
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ClassType_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 93, column 38
    function value_33 () : dynamic.Dynamic {
      return FixedPropertyIncident.ClassType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumStories_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 98, column 38
    function value_36 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumStories
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_RoofMaterial_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 103, column 38
    function value_39 () : dynamic.Dynamic {
      return FixedPropertyIncident.RoofMaterial
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ExtWallMat_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 108, column 38
    function value_42 () : dynamic.Dynamic {
      return FixedPropertyIncident.ExtWallMat
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_LossArea_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 116, column 38
    function value_45 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossArea
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinklerType_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 126, column 40
    function value_48 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkler_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 131, column 40
    function value_51 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkOper_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 136, column 40
    function value_54 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkOper
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinkRetServ_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 141, column 40
    function value_57 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinkRetServ
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossEstimate
    }
    
    // 'visible' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 77, column 84
    function visible_23 () : java.lang.Boolean {
      return FixedPropertyIncident.EstimatesReceived.Code == "Yes"
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 118, column 83
    function visible_60 () : java.lang.Boolean {
      return FixedPropertyIncident.Claim.LossCause.Code == LossCause.TC_FIRE
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get FixedPropertyIncident () : dynamic.Dynamic {
      return getRequireValue("FixedPropertyIncident", 0) as dynamic.Dynamic
    }
    
    property set FixedPropertyIncident ($arg :  dynamic.Dynamic) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotFixedPropertyIncident800DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotFixedPropertyIncident800DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 54, column 46
    function valueRoot_14 () : java.lang.Object {
      return PropertyOwner.Lienholder
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 59, column 46
    function valueRoot_17 () : java.lang.Object {
      return PropertyOwner
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 54, column 46
    function value_13 () : dynamic.Dynamic {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident800DV.pcf: line 59, column 46
    function value_16 () : dynamic.Dynamic {
      return PropertyOwner.OwnerType
    }
    
    property get PropertyOwner () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}