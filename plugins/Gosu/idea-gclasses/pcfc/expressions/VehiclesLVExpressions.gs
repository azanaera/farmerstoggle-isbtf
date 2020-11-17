package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/VehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehiclesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/VehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VehiclesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at VehiclesLV.pcf: line 33, column 42
    function valueRoot_14 () : java.lang.Object {
      return VehicleRU
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at VehiclesLV.pcf: line 38, column 43
    function valueRoot_17 () : java.lang.Object {
      return VehicleRU.Vehicle
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at VehiclesLV.pcf: line 33, column 42
    function value_13 () : java.lang.Integer {
      return VehicleRU.RUNumber
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at VehiclesLV.pcf: line 38, column 43
    function value_16 () : java.lang.String {
      return VehicleRU.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at VehiclesLV.pcf: line 43, column 44
    function value_19 () : java.lang.String {
      return VehicleRU.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at VehiclesLV.pcf: line 49, column 42
    function value_22 () : java.lang.Integer {
      return VehicleRU.Vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Color_Cell) at VehiclesLV.pcf: line 54, column 44
    function value_25 () : java.lang.String {
      return VehicleRU.Vehicle.Color
    }
    
    // 'value' attribute on TextCell (id=VIN_Cell) at VehiclesLV.pcf: line 59, column 42
    function value_28 () : java.lang.String {
      return VehicleRU.Vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at VehiclesLV.pcf: line 65, column 45
    function value_31 () : typekey.Jurisdiction {
      return VehicleRU.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at VehiclesLV.pcf: line 70, column 51
    function value_34 () : java.lang.String {
      return VehicleRU.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at VehiclesLV.pcf: line 75, column 114
    function value_37 () : java.lang.String {
      return VehicleRU.Vehicle != null ? VehicleRU.Vehicle.Lienholders.join(", ") : ""
    }
    
    // 'value' attribute on TypeKeyCell (id=status_ext_Cell) at VehiclesLV.pcf: line 80, column 45
    function value_39 () : typekey.PolicyStatus {
      return VehicleRU.Vehicle.VehicleStatus_Ext
    }
    
    // 'value' attribute on DateCell (id=effective_date_ext_Cell) at VehiclesLV.pcf: line 84, column 56
    function value_42 () : java.util.Date {
      return VehicleRU.Vehicle.EffectiveDate_Ext
    }
    
    // 'value' attribute on DateCell (id=expiration_date_ext_Cell) at VehiclesLV.pcf: line 88, column 57
    function value_45 () : java.util.Date {
      return VehicleRU.Vehicle.ExpirationDate_Ext
    }
    
    // 'value' attribute on BooleanRadioCell (id=rideshare_use_ext_Cell) at VehiclesLV.pcf: line 92, column 55
    function value_48 () : java.lang.Boolean {
      return VehicleRU.Vehicle.RideshareUse_Ext
    }
    
    property get VehicleRU () : entity.VehicleRU {
      return getIteratedValue(1) as entity.VehicleRU
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/VehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehiclesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at VehiclesLV.pcf: line 33, column 42
    function sortValue_0 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.RUNumber
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at VehiclesLV.pcf: line 38, column 43
    function sortValue_1 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.Make
    }
    
    // 'value' attribute on DateCell (id=effective_date_ext_Cell) at VehiclesLV.pcf: line 84, column 56
    function sortValue_10 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.EffectiveDate_Ext
    }
    
    // 'value' attribute on DateCell (id=expiration_date_ext_Cell) at VehiclesLV.pcf: line 88, column 57
    function sortValue_11 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.ExpirationDate_Ext
    }
    
    // 'value' attribute on BooleanRadioCell (id=rideshare_use_ext_Cell) at VehiclesLV.pcf: line 92, column 55
    function sortValue_12 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.RideshareUse_Ext
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at VehiclesLV.pcf: line 43, column 44
    function sortValue_2 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at VehiclesLV.pcf: line 49, column 42
    function sortValue_3 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Color_Cell) at VehiclesLV.pcf: line 54, column 44
    function sortValue_4 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.Color
    }
    
    // 'value' attribute on TextCell (id=VIN_Cell) at VehiclesLV.pcf: line 59, column 42
    function sortValue_5 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at VehiclesLV.pcf: line 65, column 45
    function sortValue_6 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at VehiclesLV.pcf: line 70, column 51
    function sortValue_7 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at VehiclesLV.pcf: line 75, column 114
    function sortValue_8 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle != null ? VehicleRU.Vehicle.Lienholders.join(", ") : ""
    }
    
    // 'value' attribute on TypeKeyCell (id=status_ext_Cell) at VehiclesLV.pcf: line 80, column 45
    function sortValue_9 (VehicleRU :  entity.VehicleRU) : java.lang.Object {
      return VehicleRU.Vehicle.VehicleStatus_Ext
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at VehiclesLV.pcf: line 25, column 38
    function toCreateAndAdd_51 () : entity.VehicleRU {
      return Claim.Policy.createVehicleRU()
    }
    
    // 'toRemove' attribute on RowIterator at VehiclesLV.pcf: line 25, column 38
    function toRemove_52 (VehicleRU :  entity.VehicleRU) : void {
      Claim.Policy.removeVehicleRU(VehicleRU)
    }
    
    // 'value' attribute on RowIterator at VehiclesLV.pcf: line 25, column 38
    function value_53 () : entity.VehicleRU[] {
      return PolicyVehicleList
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get PolicyVehicleList () : VehicleRU[] {
      return getRequireValue("PolicyVehicleList", 0) as VehicleRU[]
    }
    
    property set PolicyVehicleList ($arg :  VehicleRU[]) {
      setRequireValue("PolicyVehicleList", 0, $arg)
    }
    
    
  }
  
  
}