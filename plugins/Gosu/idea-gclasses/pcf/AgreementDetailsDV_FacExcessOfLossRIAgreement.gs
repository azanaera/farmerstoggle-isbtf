package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/reinsurance/AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AgreementDetailsDV_FacExcessOfLossRIAgreement extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($agreement :  RIAgreement) : void {
    __widgetOf(this, pcf.AgreementDetailsDV_FacExcessOfLossRIAgreement, SECTION_WIDGET_CLASS).setVariables(false, {$agreement})
  }
  
  function refreshVariables ($agreement :  RIAgreement) : void {
    __widgetOf(this, pcf.AgreementDetailsDV_FacExcessOfLossRIAgreement, SECTION_WIDGET_CLASS).setVariables(true, {$agreement})
  }
  
  
}