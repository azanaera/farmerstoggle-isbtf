package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/contacts/CompanyVendorSpecialtyInputSet.LawFirm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CompanyVendorSpecialtyInputSet_LawFirm extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contactHandle :  gw.api.contact.ContactHandle) : void {
    __widgetOf(this, pcf.CompanyVendorSpecialtyInputSet_LawFirm, SECTION_WIDGET_CLASS).setVariables(false, {$contactHandle})
  }
  
  function refreshVariables ($contactHandle :  gw.api.contact.ContactHandle) : void {
    __widgetOf(this, pcf.CompanyVendorSpecialtyInputSet_LawFirm, SECTION_WIDGET_CLASS).setVariables(true, {$contactHandle})
  }
  
  
}