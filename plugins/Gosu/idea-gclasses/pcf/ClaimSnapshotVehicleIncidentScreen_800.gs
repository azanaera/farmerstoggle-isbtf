package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotVehicleIncidentScreen.800.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotVehicleIncidentScreen_800 extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $IncidentParam :  dynamic.Dynamic, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotVehicleIncidentScreen_800, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $IncidentParam, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $IncidentParam :  dynamic.Dynamic, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotVehicleIncidentScreen_800, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $IncidentParam, $SnapshotParam})
  }
  
  
}