package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/summary/ClaimSummaryAssociatedClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSummaryAssociatedClaimsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $ClaimAssociationList :  ClaimAssociation[]) : void {
    __widgetOf(this, pcf.ClaimSummaryAssociatedClaimsLV, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $ClaimAssociationList})
  }
  
  function refreshVariables ($Claim :  Claim, $ClaimAssociationList :  ClaimAssociation[]) : void {
    __widgetOf(this, pcf.ClaimSummaryAssociatedClaimsLV, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $ClaimAssociationList})
  }
  
  
}