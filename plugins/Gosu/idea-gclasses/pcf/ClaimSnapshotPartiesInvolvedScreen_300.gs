package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPartiesInvolvedScreen.300.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPartiesInvolvedScreen_300 extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPartiesInvolvedScreen_300, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPartiesInvolvedScreen_300, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $SnapshotParam})
  }
  
  
}