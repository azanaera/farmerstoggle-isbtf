package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Classification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermAmount_Classification extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Classification, SECTION_WIDGET_CLASS).setVariables(false, {$covTerm})
  }
  
  function refreshVariables ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Classification, SECTION_WIDGET_CLASS).setVariables(true, {$covTerm})
  }
  
  
}