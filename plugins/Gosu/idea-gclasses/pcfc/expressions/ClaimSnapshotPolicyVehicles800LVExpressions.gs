package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyVehicles800LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyVehicles800LVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyVehicles800LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyVehicles800LVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotPolicyVehicles800LV.pcf: line 16, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return (SnapshotParam).Policy
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 28, column 40
    function sortValue_1 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).RUNumber
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 33, column 40
    function sortValue_2 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 38, column 40
    function sortValue_3 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 43, column 40
    function sortValue_4 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Color_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 48, column 40
    function sortValue_5 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.Color
    }
    
    // 'value' attribute on TextCell (id=VIN_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 53, column 40
    function sortValue_6 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.VIN
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 58, column 40
    function sortValue_7 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 63, column 40
    function sortValue_8 (VehicleRU :  dynamic.Dynamic) : java.lang.Object {
      return (VehicleRU).Vehicle.LicensePlate
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyVehicles800LV.pcf: line 21, column 35
    function value_33 () : dynamic.Dynamic {
      return getVehicles(Policy.RiskUnits)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Policy () : dynamic.Dynamic {
      return getVariableValue("Policy", 0) as dynamic.Dynamic
    }
    
    property set Policy ($arg :  dynamic.Dynamic) {
      setVariableValue("Policy", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    function getVehicles(riskUnits : dynamic.Dynamic) : dynamic.Dynamic {
      var list = new java.util.ArrayList()
      for (ru in riskUnits) {
        if (ru.Subtype.Code == "VehicleRU") {
          list.add( ru )
        }
      }
      return list.toArray()
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyVehicles800LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyVehicles800LVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 28, column 40
    function valueRoot_10 () : java.lang.Object {
      return (VehicleRU)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 33, column 40
    function valueRoot_13 () : java.lang.Object {
      return (VehicleRU).Vehicle
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 33, column 40
    function value_12 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 38, column 40
    function value_15 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 43, column 40
    function value_18 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Color_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 48, column 40
    function value_21 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.Color
    }
    
    // 'value' attribute on TextCell (id=VIN_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 53, column 40
    function value_24 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.VIN
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 58, column 40
    function value_27 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 63, column 40
    function value_30 () : dynamic.Dynamic {
      return (VehicleRU).Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at ClaimSnapshotPolicyVehicles800LV.pcf: line 28, column 40
    function value_9 () : dynamic.Dynamic {
      return (VehicleRU).RUNumber
    }
    
    property get VehicleRU () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}