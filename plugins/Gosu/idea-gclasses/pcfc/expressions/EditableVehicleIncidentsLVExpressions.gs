package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableVehicleIncidentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableVehicleIncidentsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableVehicleIncidentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableVehicleIncidentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at EditableVehicleIncidentsLV.pcf: line 22, column 44
    function pickLocation_32 () : void {
      NewVehicleIncidentPopup.push(Claim)
    }
    
    // 'value' attribute on TextCell (id=year_ext_Cell) at EditableVehicleIncidentsLV.pcf: line 32, column 29
    function sortValue_0 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at EditableVehicleIncidentsLV.pcf: line 40, column 47
    function sortValue_1 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at EditableVehicleIncidentsLV.pcf: line 46, column 50
    function sortValue_2 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at EditableVehicleIncidentsLV.pcf: line 52, column 29
    function sortValue_3 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at EditableVehicleIncidentsLV.pcf: line 58, column 29
    function sortValue_4 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TypeKeyCell (id=LossParty_Cell) at EditableVehicleIncidentsLV.pcf: line 64, column 29
    function sortValue_5 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.LossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at EditableVehicleIncidentsLV.pcf: line 69, column 38
    function sortValue_6 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.driver
    }
    
    // 'toRemove' attribute on RowIterator at EditableVehicleIncidentsLV.pcf: line 22, column 44
    function toRemove_33 (VehicleIncident :  entity.VehicleIncident) : void {
      Claim.removeNewServiceRequests(VehicleIncident); removeVehicleIncident(VehicleIncident)
    }
    
    // 'value' attribute on RowIterator at EditableVehicleIncidentsLV.pcf: line 22, column 44
    function value_34 () : entity.VehicleIncident[] {
      return Claim.VehicleIncidentsOnly
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
    function removeVehicleIncident(vehicleIncidentParam : VehicleIncident) {
      if (vehicleIncidentParam.UsedByExposure) {
          throw new gw.api.util.DisplayableException(DisplayKey.get("Web.NewLossDetailsScreen.CannotDeleteVehicleIncidentExposureLabel"))
      }  
      for (report in Claim.MetroReports) {
        if (report.VehicleIncident == vehicleIncidentParam){      
          throw new gw.api.util.DisplayableException(DisplayKey.get("Web.NewLossDetailsScreen.CannotDeleteVehicleIncidentExceptionLabel"))      
        }
      }
      Claim.removeFromIncidents( vehicleIncidentParam )
      
    }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/EditableVehicleIncidentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableVehicleIncidentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at EditableVehicleIncidentsLV.pcf: line 40, column 47
    function action_10 () : void {
      EditVehicleIncidentPopup.push(VehicleIncident, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at EditableVehicleIncidentsLV.pcf: line 46, column 50
    function action_15 () : void {
      EditVehicleIncidentPopup.push(VehicleIncident, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at EditableVehicleIncidentsLV.pcf: line 40, column 47
    function action_dest_11 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(VehicleIncident, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at EditableVehicleIncidentsLV.pcf: line 46, column 50
    function action_dest_16 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(VehicleIncident, CurrentLocation.InEditMode)
    }
    
    // 'outputConversion' attribute on TextCell (id=Make_Cell) at EditableVehicleIncidentsLV.pcf: line 40, column 47
    function outputConversion_12 (VALUE :  entity.VehicleIncident) : java.lang.String {
      return VALUE.Vehicle.Make != null ? VALUE.Vehicle.Make : DisplayKey.get("Web.EditableVehicleIncidentsLV.Unknown")
    }
    
    // 'value' attribute on TypeKeyCell (id=LossParty_Cell) at EditableVehicleIncidentsLV.pcf: line 64, column 29
    function valueRoot_27 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextCell (id=year_ext_Cell) at EditableVehicleIncidentsLV.pcf: line 32, column 29
    function valueRoot_8 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at EditableVehicleIncidentsLV.pcf: line 40, column 47
    function value_13 () : entity.VehicleIncident {
      return VehicleIncident
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at EditableVehicleIncidentsLV.pcf: line 46, column 50
    function value_17 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=LicensePlate_Cell) at EditableVehicleIncidentsLV.pcf: line 52, column 29
    function value_20 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at EditableVehicleIncidentsLV.pcf: line 58, column 29
    function value_23 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TypeKeyCell (id=LossParty_Cell) at EditableVehicleIncidentsLV.pcf: line 64, column 29
    function value_26 () : typekey.LossPartyType {
      return VehicleIncident.LossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at EditableVehicleIncidentsLV.pcf: line 69, column 38
    function value_29 () : entity.Person {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TextCell (id=year_ext_Cell) at EditableVehicleIncidentsLV.pcf: line 32, column 29
    function value_7 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    property get VehicleIncident () : entity.VehicleIncident {
      return getIteratedValue(1) as entity.VehicleIncident
    }
    
    
  }
  
  
}