package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoRightPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard_BasicInfoRightPanelSet_Trav extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_BasicInfoRightPanelSet_Trav, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Wizard})
  }
  
  function refreshVariables ($Claim :  Claim, $Wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_BasicInfoRightPanelSet_Trav, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Wizard})
  }
  
  
}