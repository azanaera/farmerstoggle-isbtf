package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotGeneral700PanelSet.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotGeneral700PanelSet_Pr extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral700PanelSet_Pr, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Snapshot})
  }
  
  function refreshVariables ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral700PanelSet_Pr, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Snapshot})
  }
  
  
}