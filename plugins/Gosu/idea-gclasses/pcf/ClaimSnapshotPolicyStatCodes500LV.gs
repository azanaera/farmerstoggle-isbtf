package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyStatCodes500LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPolicyStatCodes500LV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyStatCodes500LV, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyStatCodes500LV, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $SnapshotParam})
  }
  
  
}