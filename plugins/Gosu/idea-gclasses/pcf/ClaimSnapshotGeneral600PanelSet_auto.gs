package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotGeneral600PanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotGeneral600PanelSet_auto extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral600PanelSet_auto, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Snapshot})
  }
  
  function refreshVariables ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral600PanelSet_auto, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Snapshot})
  }
  
  
}