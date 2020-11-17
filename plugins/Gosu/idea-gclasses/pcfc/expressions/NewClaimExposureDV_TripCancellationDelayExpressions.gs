package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimExposureDV.TripCancellationDelay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimExposureDV_TripCancellationDelayExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/NewClaimExposureDV.TripCancellationDelay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NewClaimExposureDV.TripCancellationDelay.pcf: line 19, column 53
    function def_onEnter_0 (def :  pcf.NewClaimTripCancellationDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at NewClaimExposureDV.TripCancellationDelay.pcf: line 19, column 53
    function def_refreshVariables_1 (def :  pcf.NewClaimTripCancellationDV) : void {
      def.refreshVariables(Exposure)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
    
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant)
      if (claimContact != null) claimContact.ContactProhibited = prohibited
    }
        
    
    
  }
  
  
}