package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotBaggageIncidentScreen.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotBaggageIncidentScreen_600 extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($IncidentParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotBaggageIncidentScreen_600, SECTION_WIDGET_CLASS).setVariables(false, {$IncidentParam})
  }
  
  function refreshVariables ($IncidentParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotBaggageIncidentScreen_600, SECTION_WIDGET_CLASS).setVariables(true, {$IncidentParam})
  }
  
  
}