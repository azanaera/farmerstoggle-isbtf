package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsPanelSet.CommercialProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard_NewLossDetailsPanelSet_CommercialProperty extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($claim :  Claim, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_NewLossDetailsPanelSet_CommercialProperty, SECTION_WIDGET_CLASS).setVariables(false, {$claim, $wizard})
  }
  
  function refreshVariables ($claim :  Claim, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_NewLossDetailsPanelSet_CommercialProperty, SECTION_WIDGET_CLASS).setVariables(true, {$claim, $wizard})
  }
  
  
}