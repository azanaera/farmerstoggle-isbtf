package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPolicyVehiclePanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $VehicleRU :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyVehiclePanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $VehicleRU})
  }
  
  function refreshVariables ($Claim :  Claim, $VehicleRU :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyVehiclePanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $VehicleRU})
  }
  
  
}